function Profitability() { // This was the button group from bootstrap examples which i turned to profitability and removed the button function
    return (
    <div class="container px-4 py-5" id="profitability">
    <h2 class="pb-2 border-bottom font-weight-bold">Profitability</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
        <div>
          <h2>Return on capital employed</h2>
          <p>Return on capital employed is calculated by dividing net operating profit, or earnings before interest and taxes (EBIT), by capital employed. Another way to calculate it is by dividing earnings before interest and taxes by the difference between total assets and current liabilities.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
        <div>
          <h2>Return on sales</h2>
          <p>Return on sales (ROS) is a ratio used to evaluate a company's operational efficiency. This measure provides insight into how much profit is being produced per dollar of sales. An increasing ROS indicates that a company is improving efficiency, while a decreasing ROS could signal impending financial troubles. ROS is closely related to a firm's operating profit margin.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
        <div>
          <h2>Gross Margin</h2>
          <p>The Gross Margin Ratio, also known as the gross profit margin ratio, is a profitability ratio that compares the gross margin of a company to its revenue. It shows how much profit a company makes after paying off its Cost of Goods Sold (COGS).</p>
        </div>
      </div>
    </div>
  </div>)

}

export default Profitability;