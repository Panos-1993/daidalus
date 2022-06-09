function Liquidity() { // This was the button group from bootstrap examples which i turned to profitability and removed the button function
    return (
    <div class="container px-4 py-5" id="liquidity">
    <h2 class="pb-2 border-bottom font-weight-bold">Liquidity</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
      <div class="col d-flex align-items-center">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
        <div>
          <h2>Current ratio</h2>
          <p>The current ratio is a liquidity ratio that measures a company’s ability to pay short-term obligations or those due within one year. It tells investors and analysts how a company can maximize the current assets on its balance sheet to satisfy its current debt and other payables.</p>
        </div>
      </div>
      <div class="col d-flex align-items-center">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
        <div>
          <h2>Quick ratio</h2>
          <p>The quick ratio is an indicator of a company’s short-term liquidity position and measures a company’s ability to meet its short-term obligations with its most liquid assets.</p>
        </div>
      </div>
      <div class="col d-flex align-items-center">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
        </div>
      </div>
    </div>
  </div>)

}

export default Liquidity;