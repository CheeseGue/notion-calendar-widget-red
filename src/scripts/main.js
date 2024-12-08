document.addEventListener('DOMContentLoaded', () => {
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthElement = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();
    
    function updateCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        // 月表示を更新
        currentMonthElement.textContent = `${year}年${month + 1}月`;
        
        // カレンダーグリッドをクリア
        calendarGrid.innerHTML = '';
        
        // 月の初日の曜日を取得
        const firstDay = new Date(year, month, 1).getDay();
        // 月の最終日を取得
        const lastDate = new Date(year, month + 1, 0).getDate();
        
        // 前月の日数を追加
        for (let i = 0; i < firstDay; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'disabled');
            calendarGrid.appendChild(dayElement);
        }
        
        // 当月の日数を追加
        const today = new Date();
        for (let i = 1; i <= lastDate; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = i;
            
            if (year === today.getFullYear() && 
                month === today.getMonth() && 
                i === today.getDate()) {
                dayElement.classList.add('today');
            }
            
            calendarGrid.appendChild(dayElement);
        }
        
        // 次月の日数を追加
        const remainingDays = 42 - (firstDay + lastDate);
        for (let i = 0; i < remainingDays; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'disabled');
            calendarGrid.appendChild(dayElement);
        }
    }
    
    // 月移動ボタンのイベントリスナー
    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    });
    
    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    });
    
    // 初期表示
    updateCalendar();
});