import LS from '../store/local-storage';

const GetHistory = () => {
  const hist = LS.getHistory();

  return (
    <section className="hist">
      <h2>History</h2>
      <div className="hist-list">
        {hist && hist.map(item => (
          <p className="hist-layout" key={item.id}>
            {item.total}
            {item.operation}
            {item.next}
            =
            {item.result}
          </p>
        ))}
      </div>
    </section>
  );
};

export default GetHistory;
