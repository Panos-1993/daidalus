function Activity() { // This was the button group from bootstrap examples which i turned to profitability and removed the button function
    return (
    <div class="container px-4 py-5" id="activity">
    <h2 class="pb-2 border-bottom font-weight-bold">Activity</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
        <div>
          <h2>Days-sales of Inventory</h2>
          <p>The days sales of inventory (DSI) is a financial ratio that indicates the average time in days that a company takes to turn its inventory, including goods that are a work in progress, into sales.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
        <div>
          <h2>Receivables Turnover Ratio</h2>
          <p>The term receivables turnover ratio refers to an accounting measure that quantifies a company's effectiveness in collecting its accounts receivable. This ratio measures how well a company uses and manages the credit it extends to customers and how quickly that short-term debt is collected or is paid.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
        <div>
          <h2>Days Payable Outstanding</h2>
          <p>Days payable outstanding (DPO) is a financial ratio that indicates the average time (in days) that a company takes to pay its bills and invoices to its trade creditors, which may include suppliers, vendors, or financiers. The ratio is typically calculated on a quarterly or annual basis, and it indicates how well the company’s cash outflows are being managed.</p>
        </div>
      </div>
    </div>
  </div>)

}

export default Activity;