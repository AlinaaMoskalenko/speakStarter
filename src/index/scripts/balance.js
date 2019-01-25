
export default function balanceTabsToggle(balanceTabs, balanceCharts) {
    const tabs = balanceTabs.querySelectorAll('.balance__tab');
    const charts = balanceCharts.querySelectorAll('.chart__info');

    let activeTab = balanceTabs.querySelector('.balance__tab_selected');
    let activeChart = balanceCharts.querySelector('.chart__info_shown');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('data-id', i);
    }

    balanceTabs.addEventListener('click', () => {
        if (activeTab) {
            activeTab.classList.remove('balance__tab_selected');
            activeChart.classList.remove('chart__info_shown');
        }

        activeTab = event.target;
        activeChart = charts[event.target.getAttribute('data-id')];

        activeTab.classList.add('balance__tab_selected');
        activeChart.classList.add('chart__info_shown');
    });
}