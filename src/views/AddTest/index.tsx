import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar";
import ScrollToTop from "../ScrollToTop";
import { AddTestSection, AddTestWrapper } from "./AddTestElements";
import "./index.css";
import type { FormEvent } from "react";

function AddTest({ list }: { list: any }) {
  let nameQuiz = "default";
  let questions: any = [];
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  const sendQuiz = (event: any) => {
    event.preventDefault();
    let quiz = [nameQuiz, questions];
    console.log(quiz);
  };
  const sendForm1 = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name } = event.target as typeof event.target & {
      name: { value: string };
    };

    nameQuiz = name.value;
    console.log(nameQuiz);
  };

  const sendFormPOST = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { question, option1, option2, option3, option4, answer } =
      event.target as typeof event.target & {
        question: { value: string };
        option1: { value: string };
        option2: { value: string };
        option3: { value: string };
        option4: { value: string };
        answer: { value: string };
      };

    let setQuestion = JSON.stringify({
      questionText: question,
      answerOptions: [
        {
          answerText: String(JSON.stringify(option1)),
          isCorrect: Number(answer) === 1 ? true : false,
        },
        { answerText: option2, isCorrect: Number(answer) === 2 ? true : false },
        { answerText: option3, isCorrect: Number(answer) === 3 ? true : false },
        { answerText: option4, isCorrect: Number(answer) === 4 ? true : false },
      ],
    });
    questions.push(setQuestion);

    console.log(setQuestion);
  };

  const sendFormDELETE = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { id } = event.target as typeof event.target & {
      id: { value: string };
    };

    let idDelete = id;
  };

  const sendFormUPDATE = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { id, question, option1, option2, option3, option4, answer } =
      event.target as typeof event.target & {
        id: { value: string };
        question: { value: string };
        option1: { value: string };
        option2: { value: string };
        option3: { value: string };
        option4: { value: string };
        answer: { value: string };
      };

    let idUpdate = id;
    let setQuestion = JSON.stringify({
      questionText: question,
      answerOptions: [
        { answerText: option1, isCorrect: Number(answer) === 1 ? true : false },
        { answerText: option2, isCorrect: Number(answer) === 2 ? true : false },
        { answerText: option3, isCorrect: Number(answer) === 3 ? true : false },
        { answerText: option4, isCorrect: Number(answer) === 4 ? true : false },
      ],
    });
  };

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} on="partner" />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AddTestSection>
        <AddTestWrapper>
          <div>
            <div className="wrapper">
              <div>
                <h2>Nombre de Evaluación</h2>
                <form
                  id="form1"
                  className="form-horizontal"
                  onSubmit={(evt) => sendForm1(evt)}
                >
                  <input
                    id="name"
                    type="text"
                    placeholder="Nombre Evaluación"
                  />
                  <button type="submit">Cargar Nombre</button>
                </form>
              </div>
              <div>
                <h2>Agregar Pregunta</h2>
                <form
                  className="form-horizontal"
                  onSubmit={(evt) => sendFormPOST(evt)}
                >
                  <input id="pregunta" type="text" placeholder="Pregunta" />
                  <input id="opcion1" type="text" placeholder="Opcion 1" />
                  <input id="opcion2" type="text" placeholder="Opcion 2" />
                  <input id="opcion3" type="text" placeholder="Opcion 3" />
                  <input id="opcion4" type="text" placeholder="Opcion 4" />
                  <input
                    id="respuesta"
                    type="text"
                    placeholder="Número opción correcta"
                  />
                  <button type="submit">Cargar Pregunta</button>
                </form>
              </div>
            </div>
            <div className="wrapper">
              <div>
                <h2>Borrar Pregunta</h2>
                <form
                  className="form-horizontal"
                  onSubmit={(evt) => sendFormDELETE(evt)}
                >
                  <input id="id" type="text" placeholder="Borrar pregunta" />
                  <button type="submit">Borrar Pregunta</button>
                </form>
              </div>
              <div>
                <h2>Modificar Pregunta</h2>
                <form
                  className="form-horizontal"
                  onSubmit={(evt) => sendFormUPDATE(evt)}
                >
                  <input id="id" type="text" placeholder="Número pregunta" />
                  <input id="pregunta" type="text" placeholder="Pregunta" />
                  <input id="opcion1" type="text" placeholder="Opcion 1" />
                  <input id="opcion2" type="text" placeholder="Opcion 2" />
                  <input id="opcion3" type="text" placeholder="Opcion 3" />
                  <input id="opcion4" type="text" placeholder="Opcion 4" />
                  <input
                    id="respuesta"
                    type="text"
                    placeholder="Número opción correcta"
                  />
                </form>
                <button type="submit">Modificar Pregunta</button>
              </div>
            </div>
          </div>
          <p>Nombre de Evaluación: {nameQuiz}</p>
          <table>
            <tbody>
              {list.map((index: any) => (
                <>
                  <tr>{String(JSON.stringify(index.questionText))}</tr>
                  {index.answerOptions.map((element: any) => (
                    <tr>{String(JSON.stringify(element))}</tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
          <button type="submit" onClick={(evt) => sendQuiz(evt)}>
            Cargar Test
          </button>
        </AddTestWrapper>
      </AddTestSection>
    </>
  );
}

export default AddTest;
