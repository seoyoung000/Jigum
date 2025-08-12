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
document.addEventListener('DOMContentLoaded', function() {
    createPortfolioChart();
    createGrowthChart();
    updateCalendar();
});