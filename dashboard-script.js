// 포트폴리오 차트 생성
function createPortfolioChart() {
    const ctx = document.getElementById('portfolioChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['우량주 적립식', 'ISA 계좌', '글로벌 ETF', '여성리더십 교육', '로보어드바이저'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'],
                borderWidth: 0,
                hoverBorderWidth: 2,
                hoverBorderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#3498db',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// 성장 차트 생성
function createGrowthChart() {
    const ctx = document.getElementById('growthChart').getContext('2d');
    
    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    const data = [2800, 2950, 2850, 3100, 3250, 3180, 3300, 3150, 3400, 3250, 3200, 3250];
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: '총 자산 (만원)',
                data: data,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                fill: true,
                tension: 0.3,
                pointBackgroundColor: '#2563eb',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#2563eb',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y.toLocaleString() + '만원';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: '#6c757d'
                    }
                },
                y: {
                    beginAtZero: false,
                    grid: {
                        color: '#f8f9fa'
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: '#6c757d',
                        callback: function(value) {
                            return value.toLocaleString() + '만원';
                        }
                    }
                }
            },
            elements: {
                point: {
                    hoverRadius: 6
                }
            }
        }
    });
}

// 액션 함수들
function logout() {
    if (confirm('로그아웃하시겠습니까?')) {
        alert('로그아웃되었습니다.');
        window.location.href = 'index.html';
    }
}

function addInvestment() {
    alert('투자 추가 페이지로 이동합니다.\n\n현재 추천 투자:\n• 우량주 적립식 (월 10만원)\n• ISA 계좌 추가 납입\n• 글로벌 ETF 비중 확대');
}

function rebalancePortfolio() {
    alert('포트폴리오 리밸런싱을 시작합니다.\n\nAI 분석 결과:\n• 우량주 비중 5% 증가 권장\n• 글로벌 ETF 비중 조정\n• 새로운 섹터 ETF 추가 검토');
}

function showPolicyGuide() {
    alert('정책 혜택 가이드\n\n현재 신청 가능한 혜택:\n• 여성 리더십 아카데미 (무료)\n• 경력단절예방 지원금 (월 30만원)\n• 여성기업 창업지원 (최대 1억원)\n\n자세한 신청 방법을 안내해드립니다.');
}

function consultExpert() {
    alert('전문가 상담 예약\n\n상담 가능 시간:\n• 평일 10:00 - 18:00\n• 온라인/오프라인 상담 가능\n• 여성 전문 투자자문가 매칭\n\n예약을 진행하시겠습니까?');
}

// 여성 정책 모달 관련 함수
function showPolicyModal() {
    document.getElementById('policyModal').classList.add('active');
}

function closePolicyModal() {
    document.getElementById('policyModal').classList.remove('active');
}

// 캘린더 및 Todo 관련 함수
let currentDate = new Date();

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
}

function updateCalendar() {
    const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    document.querySelector('.calendar-month').textContent = `${currentDate.getFullYear()}년 ${monthNames[currentDate.getMonth()]}`;
}

function toggleTodo(checkbox) {
    const todoItem = checkbox.parentElement;
    const todoText = todoItem.querySelector('.todo-text');
    
    if (checkbox.classList.contains('checked')) {
        checkbox.classList.remove('checked');
        todoText.classList.remove('completed');
    } else {
        checkbox.classList.add('checked');
        todoText.classList.add('completed');
    }
}

// 모달 외부 클릭 시 닫기
document.addEventListener('click', function(event) {
    const modal = document.getElementById('policyModal');
    if (event.target === modal) {
        closePolicyModal();
    }
});

// 페이지 로드 시 차트 생성
// 미션 완료 기능
function completeMission(button) {
    const missionItem = button.closest('.mission-item');
    missionItem.classList.remove('active');
    missionItem.classList.add('completed');
    missionItem.querySelector('.mission-check').textContent = '✅';
    button.remove();
    
    // 경험치 애니메이션
    const progressFill = document.querySelector('.progress-fill');
    const currentWidth = parseInt(progressFill.style.width || '65');
    const newWidth = Math.min(currentWidth + 4, 100);
    progressFill.style.width = newWidth + '%';
    
    // 경험치 텍스트 업데이트
    const progressText = document.querySelector('.progress-text');
    const currentExp = 650 + (newWidth - 65) * 10;
    progressText.textContent = `경험치 ${currentExp}/1000`;
}

// 포트폴리오 상세 페이지 열기
function openPortfolioDetail() {
    document.getElementById('portfolioDetailModal').style.display = 'flex';
}

// 포트폴리오 상세 페이지 닫기
function closePortfolioDetail() {
    document.getElementById('portfolioDetailModal').style.display = 'none';
}

// 포트폴리오 미니 차트 생성
function createPortfolioMiniChart() {
    const ctx = document.getElementById('portfolioMiniChart');
    if (!ctx) return;
    
    new Chart(ctx.getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['주식', 'ETF', '채권', '기타'],
            datasets: [{
                data: [40, 30, 20, 10],
                backgroundColor: ['#3498db', '#2ecc71', '#f39c12', '#9b59b6'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// 여성 콘텐츠 전체보기
function showAllWomenContent() {
    alert('여성 성장 콘텐츠 전체 페이지로 이동합니다.');
}

// 리밸런싱 기능
function rebalanceAll() {
    alert('포트폴리오 리밸런싱을 시작합니다.');
}

// 보고서 내보내기
function exportReport() {
    alert('포트폴리오 보고서를 다운로드합니다.');
}

// 미션 배너 기능
function closeMissionBanner() {
    const banner = document.querySelector('.mission-event-banner');
    banner.style.display = 'none';
}

function openMissionDetail() {
    alert('상세 미션 페이지로 이동합니다.');
}

// 여성 콘텐츠 카테고리 전환
function switchCategory(category) {
    // 탭 활성화
    document.querySelectorAll('.cat-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // 콘텐츠 전환
    document.querySelectorAll('.slider-container').forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(category + '-content').style.display = 'grid';
}

// 위젯 드래그 앤 드롭 기능 (Sortable.js 사용)
let isLayoutEditMode = false;
let mainSortable = null;
let sidebarSortable = null;

function toggleLayoutEdit() {
    isLayoutEditMode = !isLayoutEditMode;
    const dashboardGrid = document.getElementById('dashboard-widgets');
    const button = event.target.closest('button');
    
    if (isLayoutEditMode) {
        dashboardGrid.classList.add('layout-edit-mode');
        button.innerHTML = '<span class="layout-icon">✓</span> 편집 완료';
        button.style.background = '#4CAF50';
        enableSortable();
        showLayoutInstructions();
    } else {
        dashboardGrid.classList.remove('layout-edit-mode');
        button.innerHTML = '<span class="layout-icon">📱</span> 레이아웃 재배치';
        button.style.background = '#6c757d';
        disableSortable();
        hideLayoutInstructions();
    }
}

function enableSortable() {
    const mainContent = document.querySelector('.main-content');
    const sidebar = document.querySelector('.sidebar');
    
    // 메인 콘텐츠 영역 sortable 설정
    if (mainContent) {
        mainSortable = new Sortable(mainContent, {
            group: 'widgets',
            animation: 150,
            handle: '.widget-handle',
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            onStart: function(evt) {
                evt.item.classList.add('dragging');
            },
            onEnd: function(evt) {
                evt.item.classList.remove('dragging');
                saveWidgetLayout();
                showToast('위젯 위치가 저장되었습니다!');
            }
        });
    }
    
    // 사이드바 영역 sortable 설정
    if (sidebar) {
        sidebarSortable = new Sortable(sidebar, {
            group: 'widgets',
            animation: 150,
            handle: '.widget-handle',
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            onStart: function(evt) {
                evt.item.classList.add('dragging');
            },
            onEnd: function(evt) {
                evt.item.classList.remove('dragging');
                saveWidgetLayout();
                showToast('위젯 위치가 저장되었습니다!');
            }
        });
    }
    
    // 위젯 핸들 표시
    document.querySelectorAll('.widget-handle').forEach(handle => {
        handle.style.opacity = '1';
    });
}

function disableSortable() {
    if (mainSortable) {
        mainSortable.destroy();
        mainSortable = null;
    }
    
    if (sidebarSortable) {
        sidebarSortable.destroy();
        sidebarSortable = null;
    }
    
    // 위젯 핸들 숨기기
    document.querySelectorAll('.widget-handle').forEach(handle => {
        handle.style.opacity = '0';
    });
}

function showLayoutInstructions() {
    const instruction = document.createElement('div');
    instruction.id = 'layout-instruction';
    instruction.className = 'layout-instruction';
    instruction.innerHTML = '📱 위젯을 드래그해서 순서를 바꿔보세요!';
    instruction.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #2563eb;
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: fadeIn 0.5s ease;
    `;
    document.body.appendChild(instruction);
    
    setTimeout(() => {
        instruction.remove();
    }, 3000);
}

function hideLayoutInstructions() {
    const instruction = document.getElementById('layout-instruction');
    if (instruction) {
        instruction.remove();
    }
}

function saveWidgetLayout() {
    const widgets = document.querySelectorAll('.widget-card');
    const layout = [];
    widgets.forEach(widget => {
        layout.push(widget.dataset.widget);
    });
    localStorage.setItem('dashboardLayout', JSON.stringify(layout));
    
    // 사용자 피드백
    showToast('레이아웃이 저장되었습니다!');
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    createPortfolioChart();
    createGrowthChart();
    updateCalendar();
    createPortfolioMiniChart();
});