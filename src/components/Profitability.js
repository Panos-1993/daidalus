function Profitability() {
    return (
        <div class="container px-3 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom">Profitability</h2>
    
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                <h2 class="mt-5 mb-4 lh-1 fw-bold">Return on capital employed (ROCE)= Operating profit + (noncurrent liabilities + total equity) * % </h2>
                <ul class="d-flex list-unstyled mt-auto">
                </ul>
              </div>
            </div>
          </div>
    
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-1">
                <h2 class="mt-5 mb-4 display-6 lh-1 fw-bold">Return on Sales</h2>
              </div>
            </div>
          </div>
    
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
              <div class="d-flex flex-column h-100 p-5 pb-4 text-shadow-1">
                <h2 class="mt-5 mb-4 display-6 lh-1 fw-bold">Gross margin</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
        )

}

export default Profitability;