const LS = (() => {
  let LSArray;

  const getHistory = () => {
    if (localStorage.getItem('history') === null) {
      LSArray = [];
    } else {
      LSArray = JSON.parse(localStorage.getItem('history'));
    }
    return LSArray;
  };

  const addHistory = obj => {
    LSArray = getHistory();
    LSArray.push(obj);
    localStorage.setItem('history', JSON.stringify(LSArray));
  };

  return {
    LSArray, addHistory, getHistory,
  };
})();

export default LS;
