import {useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import quiz from "../../assets/quiz1.json"
function Quiz(){
  const base = "quiz";
  const [size, setSize] = useState(0);
  const [index, setIndex] = useState(0);
  const [flag,setFlag] = useState(false)
  const [answers, setAnswers] = useState({})
  const opt1 = useRef();
  const opt2 = useRef();
  const opt3 = useRef();
  const opt4 = useRef();
  const bar = useRef();

  const answerChecked = () =>{
    if(opt1.current.checked){
      answers[index]="A";
      setAnswers(answers);
      return true
    }
    else{
      if(opt2.current.checked){
        answers[index]="B";
        setAnswers(answers);
        return true
      }
      else{
        if(opt3.current.checked){
          answers[index]="C";
          setAnswers(answers);
          return true
        }
        else{
          if(opt4.current.checked){
            answers[index]="D";
            setAnswers(answers);
            return true
          }
          else{
            return false
          }
        }
      }
    }
    
  }
  const finish = () => {
    const flag= answerChecked()
    if(flag) {
      setFlag(false)}
    console.log(answers);
  };
  const goNext = () => {
    const flag= answerChecked()
    if(flag) {
      bar.current.style.width=(100/quiz.questions.length *(index+1)).toFixed(2)+"%";
      setIndex(index+1)
      }
  };
  const goBack = () => {
    bar.current.style.width=(100/quiz.questions.length *(index-1)).toFixed(2)+"%";
    setIndex(index-1);
  };

  window.onresize = () => { setSize(window.innerWidth) };
  useEffect(() => {
    setSize(window.innerWidth)
  }, [])

  return (
    <div className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
          <div className={`${base}__header`}>
            <h1 className={`${base}__header__title`}>{quiz.name}</h1>
          </div>
          <div className={`${base}__question`}>
            <div className={`${base}__question__wrapper`}>
            <h2 className={`${base}__question__title`}>Pregunta {index+1}</h2>
            <div className={`${base}__question__progressBar`}>
              <div className={`${base}__question__progressBar__bar`}>
                <div ref={bar} className={`${base}__question__progressBar__bar__progress`}></div>
              </div>
            </div>
            </div>
            <img src={quiz.questions[index].question} alt="question" className={`${base}__question__image`}/>
            
          </div>
          <div className={`${base}__options`}>
            <label htmlFor="option1" className={`${base}__options__container`}>
              <input ref={opt1} type="radio" name="myRadioField" id="option1" className={`${base}__options__container__radio`}/>
              <img src={quiz.questions[index].option1} alt="question" className={`${base}__options__container__image`}/>
              
          </label>

          <label htmlFor="option2" className={`${base}__options__container`}>
            <input ref={opt2} type="radio" name="myRadioField" id="option2" className={`${base}__options__container__radio`}/>
            <img src={quiz.questions[index].option2} alt="question" className={`${base}__options__container__image`}/>
            
          </label>
          {quiz.questions[index].option3!=null ? <> 
          <label htmlFor="option3" className={`${base}__options__container`}>
            <input ref={opt3} type="radio" name="myRadioField" id="option3" className={`${base}__options__container__radio`}/>
            <img src={quiz.questions[index].option3} alt="question" className={`${base}__options__container__image`}/>
          
          </label>
          {quiz.questions[index].option4!=null ? <>
          <label htmlFor="option4" className={`${base}__options__container`}>
            <input ref={opt4} type="radio" name="myRadioField" id="option4" className={`${base}__options__container__radio`}/>
            <img src={quiz.questions[index].option4} alt="question" className={`${base}__options__container__image`}/>
          
          </label></>: null}</> : null}
            
          </div>
          <div className={`${base}__buttons`}>
            {index===0 ? null : <button onClick={()=>{goBack()}}>Anterior</button>}
            
            {index===quiz.questions.length-1 ? <button onClick={()=>{finish()}}>Finalizar</button> : <button onClick={()=>{goNext()}}>Siguiente</button>}
          </div>
      </div>
    </div>
  );
    
}

export default Quiz;