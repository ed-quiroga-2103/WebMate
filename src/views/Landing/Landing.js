import {React} from "react";
import { useNavigate } from "react-router-dom";
import logIcon from "../../assets/logout.png"
import average from "../../assets/average.json"
import next from "../../assets/next.json"
import lastGrades from "../../assets/lastGrades.json"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  
  },
};

const labels = ["Tarea 1","Quiz 1", "Quiz 2", "Examen 1", "Proyecto 1"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Calculo Diferencial e Integral',
      data: [50, 80, 60, 90, 75],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Algebra Lineal',
      data: [70, 88, 63, 70, 75],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function Landing(){
  const base = "landing";
  const navigate = useNavigate()
  const goTo = (event, where) => {
    event.stopPropagation();
    navigate(`/${where}`);
  }; 

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


    return (
      <main className={`${base}__root`}>
      <div className={`${base}__wrapper`}>
        <div className={`${base}__wrapper__header`}>
          <h1 className={`${base}__wrapper__header__title`}>Web Mate</h1>
          <div className={`${base}__wrapper__header__logout`}>
            <img src={logIcon} alt={"Log out"} onClick={(event)=>goTo(event,"login")} className={`${base}__wrapper__header__logout__img`}/>
          </div>

        </div>
        <div className={`${base}__wrapper__container`}>
          <div className={`${base}__wrapper__container__firstRow`}>
            <div className={`${base}__singleCard`}>
              <div className={`${base}__singleCard__header`}>
                <h2 className={`${base}__singleCard__header__title`}>Promedio</h2>
              </div>
              <div className={`${base}__singleCard__average`}>
                <p className={`${base}__singleCard__average__grade`}>{average.grade}</p> 
                {average.status? 
                <p className={`${base}__singleCard__average__up`}>&uarr;</p> 
                :<p className={`${base}__singleCard__average__down`}>&darr;</p> }
              </div>
            </div>
            <div className={`${base}__singleCard`}>
              <div className={`${base}__singleCard__header`}>
                <h2 className={`${base}__singleCard__header__title`}>Siguiente Asignacion</h2>
              </div>
              <div className={`${base}__singleCard__next`}>
                <p className={`${base}__singleCard__next__info`}>{next.type} - {next.course}: {next.date}</p>
              </div>
            </div>
            <div onClick={(event)=>goTo(event,"courses")} className={`${base}__singleCard--ultimo`}>
              <h2 className={`${base}__singleCard__title`}>Ultimo Curso Visitado</h2>
              
            </div>
          </div>
          <div className={`${base}__wrapper__container__secondRow`}>
            <div className={`${base}__bigCard`}>
              <h2 className={`${base}__bigCard__title`}>Datos</h2>
              <Line className={`${base}__bigCard__chart`} options={options} data={data} />
            </div>
            <div className={`${base}__smallCard`}>
              <div className={`${base}__smallCard__header`}>
                <h2 className={`${base}__smallCard__header__title`}>Ultimas notas</h2>
              </div>
             <div className={`${base}__smallCard__info`}>
              {lastGrades.map((grade,index) => {
                return(
                  <div key={index} className={`${base}__smallCard__info__grade`}>
                      <p className={`${base}__smallCard__info__grade__text`}>{grade.course}</p>
                      <p className={`${base}__smallCard__info__grade__text`}>{grade.type}: {grade.grade}%</p>
                  </div>
                )
              })}
             </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
    
}

export default Landing;