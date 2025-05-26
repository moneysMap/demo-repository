import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <span className="time">9:41</span>
        <h1 className="title">MoneyMap</h1>
      </div>

      {/* Month Navigation */}
      <div className="monthContainer">
        <span className="month">Fevereiro</span>
        <span className="month">Março</span>
        <span className="month activeMonth">Abril</span>
      </div>

      {/* Income/Expense */}
      <div className="incomeExpenseContainer">
        <span className="incomeExpenseText">Receita</span>
        <span className="incomeExpenseText">Despesa</span>
      </div>

      {/* Divider */}
      <hr className="divider" />

      {/* Patrimony Growth */}
      <section className="section">
        <h2 className="sectionTitle">Crescimento de Patrimônio</h2>
        <div className="chartContainer">
          {/* Chart bars */}
          <div className="chartBars">
            <div className="bar bar300" />
            <div className="bar bar250" />
            <div className="bar bar200" />
            <div className="bar bar150" />
            <div className="bar bar100" />
          </div>
          
          {/* Chart labels */}
          <div className="chartLabels">
            <span className="chartLabel">R$300</span>
            <span className="chartLabel">R$250</span>
            <span className="chartLabel">R$200</span>
            <span className="chartLabel">R$150</span>
            <span className="chartLabel">R$100</span>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="timeline">
          <span className="timelineLabel">Nov 23</span>
          <span className="timelineLabel">24</span>
          <span className="timelineLabel">25</span>
          <span className="timelineLabel">26</span>
          <span className="timelineLabel">27</span>
          <span className="timelineLabel">28</span>
          <span className="timelineLabel">29</span>
          <span className="timelineLabel">30</span>
        </div>
      </section>

      {/* Divider */}
      <hr className="divider" />

      {/* Transactions */}
      <section className="section">
        <h2 className="sectionTitle">Transações</h2>
        
        <div className="transaction">
          <strong className="transactionAmount">R$ 70,00</strong>
          <span className="transactionDescription">Combustível</span>
        </div>
        
        <div className="transaction">
          <strong className="transactionAmount">R$ 300,00</strong>
          <span className="transactionDescription">Pagamento</span>
        </div>
      </section>
    </div>
  );
};

export default App;