let memoryBlocksData = [];
let processesData = [];
let currentStep = 0;
let bestFitBlocks = [];
let worstFitBlocks = [];

function initializeMemory() {
    const memoryInput = document.getElementById('memoryBlocks').value;
    const processInput = document.getElementById('processes').value;

    memoryBlocksData = memoryInput.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
    processesData = processInput.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));

    bestFitBlocks = memoryBlocksData.map((size, index) => ({
        id: index,
        size: size,
        free: size,
        processes: []
    }));

    worstFitBlocks = JSON.parse(JSON.stringify(bestFitBlocks));

    currentStep = 0;
    renderMemory();
    renderProcessList();
    updateStats();
}

function renderMemory() {
    renderAlgorithmMemory('bestFitMemory', bestFitBlocks);
    renderAlgorithmMemory('worstFitMemory', worstFitBlocks);
}

function renderAlgorithmMemory(containerId, blocks) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    blocks.forEach((block, index) => {
        const blockDiv = document.createElement('div');
        blockDiv.className = 'memory-block';
        
        const totalUsed = block.size - block.free;
        const usedPercentage = (totalUsed / block.size) * 100;

        if (block.processes.length > 0) {
            blockDiv.classList.add('occupied');
        } else {
            blockDiv.classList.add('free');
        }

        const processesHTML = block.processes.map(p => 
            `<span style="background: #1e293b; padding: 2px 6px; border-radius: 3px; margin-right: 5px; border: 1px solid #475569;">P${p.id} (${p.size} KB)</span>`
        ).join('');

        blockDiv.innerHTML = `
            <div class="memory-block-header">
                <strong>Bloque ${index + 1}</strong>
                <span>${block.free} KB libres</span>
            </div>
            <div class="memory-block-info">
                Tamaño total: ${block.size} KB | Usado: ${totalUsed} KB (${usedPercentage.toFixed(1)}%)
            </div>
            ${block.processes.length > 0 ? `<div style="margin-top: 8px;">Procesos: ${processesHTML}</div>` : ''}
            <div style="margin-top: 8px; background: #475569; border-radius: 5px; overflow: hidden;">
                <div style="width: ${usedPercentage}%; height: 8px; background: linear-gradient(90deg, #0ea5e9, #06b6d4); transition: width 0.5s;"></div>
            </div>
        `;

        container.appendChild(blockDiv);
    });
}

function renderProcessList() {
    const container = document.getElementById('processList');
    container.innerHTML = '<h3>Procesos</h3>';

    processesData.forEach((size, index) => {
        const processDiv = document.createElement('div');
        processDiv.className = 'process-item';
        
        if (index < currentStep) {
            processDiv.classList.add('allocated');
        } else {
            processDiv.classList.add('waiting');
        }

        processDiv.innerHTML = `
            <span><strong>Proceso ${index + 1}</strong> - ${size} KB</span>
            <span>${index < currentStep ? 'Asignado' : 'En espera'}</span>
        `;

        container.appendChild(processDiv);
    });
}

function bestFit(blocks, processSize, processId) {
    let bestIndex = -1;
    let minDifference = Infinity;

    blocks.forEach((block, index) => {
        if (block.free >= processSize) {
            const difference = block.free - processSize;
            if (difference < minDifference) {
                minDifference = difference;
                bestIndex = index;
            }
        }
    });

    if (bestIndex !== -1) {
        blocks[bestIndex].processes.push({ id: processId, size: processSize });
        blocks[bestIndex].free -= processSize;
        return true;
    }
    return false;
}

function worstFit(blocks, processSize, processId) {
    let worstIndex = -1;
    let maxDifference = -1;

    blocks.forEach((block, index) => {
        if (block.free >= processSize) {
            const difference = block.free - processSize;
            if (difference > maxDifference) {
                maxDifference = difference;
                worstIndex = index;
            }
        }
    });

    if (worstIndex !== -1) {
        blocks[worstIndex].processes.push({ id: processId, size: processSize });
        blocks[worstIndex].free -= processSize;
        return true;
    }
    return false;
}

function calculateFragmentation(blocks) {
    return blocks.reduce((sum, block) => sum + block.free, 0);
}

function updateStats() {
    const bestFitAllocated = processesData.slice(0, currentStep).length;
    const worstFitAllocated = processesData.slice(0, currentStep).length;
    const bestFitFrag = calculateFragmentation(bestFitBlocks);
    const worstFitFrag = calculateFragmentation(worstFitBlocks);

    document.getElementById('bestFitAllocated').textContent = bestFitAllocated;
    document.getElementById('bestFitFragmentation').textContent = bestFitFrag + ' KB';
    document.getElementById('worstFitAllocated').textContent = worstFitAllocated;
    document.getElementById('worstFitFragmentation').textContent = worstFitFrag + ' KB';

    updateComparison(bestFitFrag, worstFitFrag);
}

function updateComparison(bestFitFrag, worstFitFrag) {
    const comparisonSection = document.getElementById('comparisonSection');
    
    let winner = '';
    if (bestFitFrag < worstFitFrag) {
        winner = 'Best Fit tiene menor fragmentación';
    } else if (worstFitFrag < bestFitFrag) {
        winner = 'Worst Fit tiene menor fragmentación';
    } else {
        winner = 'Ambos algoritmos tienen la misma fragmentación';
    }

    comparisonSection.innerHTML = `
        <h3>Análisis Comparativo</h3>
        <div class="comparison-item ${bestFitFrag <= worstFitFrag ? 'winner' : ''}">
            <span>Best Fit - Fragmentación:</span>
            <span>${bestFitFrag} KB</span>
        </div>
        <div class="comparison-item ${worstFitFrag <= bestFitFrag ? 'winner' : ''}">
            <span>Worst Fit - Fragmentación:</span>
            <span>${worstFitFrag} KB</span>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #1e293b; border-radius: 5px; text-align: center; font-weight: bold; color: #38bdf8;">
            ${winner}
        </div>
        <div style="margin-top: 15px; padding: 15px; background: #1e293b; border-radius: 5px; font-size: 0.9em; color: #cbd5e1;">
            <strong>Nota:</strong> Best Fit busca el bloque más pequeño que quepa el proceso, minimizando el espacio desperdiciado. 
            Worst Fit busca el bloque más grande disponible, dejando fragmentos más grandes que pueden ser útiles para procesos futuros.
        </div>
    `;
}

async function runSimulation() {
    if (processesData.length === 0) {
        alert('Por favor, inicializa la memoria primero');
        return;
    }

    currentStep = 0;
    initializeMemory();

    for (let i = 0; i < processesData.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        currentStep = i + 1;
        
        bestFit(bestFitBlocks, processesData[i], i + 1);
        worstFit(worstFitBlocks, processesData[i], i + 1);
        
        renderMemory();
        renderProcessList();
        updateStats();
    }
}

function stepByStep() {
    if (processesData.length === 0) {
        alert('Por favor, inicializa la memoria primero');
        return;
    }

    if (currentStep >= processesData.length) {
        alert('Simulación completada. Presiona "Limpiar" para reiniciar.');
        return;
    }

    bestFit(bestFitBlocks, processesData[currentStep], currentStep + 1);
    worstFit(worstFitBlocks, processesData[currentStep], currentStep + 1);
    
    currentStep++;
    renderMemory();
    renderProcessList();
    updateStats();
}

function reset() {
    currentStep = 0;
    bestFitBlocks = [];
    worstFitBlocks = [];
    document.getElementById('bestFitMemory').innerHTML = '';
    document.getElementById('worstFitMemory').innerHTML = '';
    document.getElementById('processList').innerHTML = '';
    document.getElementById('comparisonSection').innerHTML = '';
    
    document.getElementById('bestFitAllocated').textContent = '0';
    document.getElementById('bestFitFragmentation').textContent = '0';
    document.getElementById('worstFitAllocated').textContent = '0';
    document.getElementById('worstFitFragmentation').textContent = '0';
}

// Inicializar al cargar la página
window.onload = function() {
    initializeMemory();
};
