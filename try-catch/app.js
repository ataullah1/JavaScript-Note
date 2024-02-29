console.log('Hello');
document.getElementById('btn').addEventListener('click', () => {
  const input = document.getElementById('inputFild').value;
  const errorMassage = document.getElementById('error');
  try {
    const inpNum = parseInt(input);
    if (isNaN(inpNum)) {
      throw 'Please input a valid number age.';
    } else if (inpNum < 18) {
      throw 'Tmi Bassa manus ar aktu boro hoa nao.';
    } else if (inpNum > 60) {
      throw 'Murubbi apner to boios hoa gese.';
    }
    errorMassage.innerText = '';
  } catch (err) {
    errorMassage.innerText = err;
    console.log(err);
  } finally {
    console.log('Hi Kmn Aso?');
  }
});
