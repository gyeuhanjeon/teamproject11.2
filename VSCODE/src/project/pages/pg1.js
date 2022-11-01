import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TeamAPI from '../api/TeamAPI'
import "./pg.css";

const Pg1 = () => {
    const localId = window.localStorage.getItem("userId");

    let [start, setStart] = useState(true);
    let [q1, setQ1] = useState(false);
    let [q2, setQ2] = useState(false);
    let [q3, setQ3] = useState(false);
    let [q4, setQ4] = useState(false);
    let [q5, setQ5] = useState(false);
    let [q6, setQ6] = useState(false);

    const [m1, setM1] = useState('');
    const [m2, setM2] = useState('');
    const [m3, setM3] = useState('');
    const [m4, setM4] = useState('');
    const [result, setResult] = useState('');

    // let m1='';
    // let m2='';
    // let m3='';
    // let m4='';

    const ClickStart = () => {
        setQ1(true);
        setStart(false);
    }

    const ClickYes1 = () => {
        // m1="E";
        setM1("E");
        setQ2(true);
        setQ1(false)
    }
    const ClickYes2 = () => {
        // m2="S";
        setM2("S");
        setQ3(true);
        setQ2(false);
    }
    const ClickYes3 = () => {
        // m3="T";
        setM3("T");
        setQ4(true);
        setQ3(false);
    }
    const ClickYes4 = () => {
        // m4="J";
        setM4("J");
        setQ4(false);
        setQ5(true);
        setQ6(true);

    }
    const ClickNo1 = () => {
        // m1="I";
        setM1("I");
        setQ2(true);
        setQ1(false);
    }
    const ClickNo2 = () => {
        // m2="N";
        setM2("N");
        setQ3(true);
        setQ2(false);
    }
    const ClickNo3 = () => {
        // m3="F";
        setM3("F");
        setQ4(true);
        setQ3(false);
    }
    const ClickNo4 = () => {
        // m4="P";
        setM4("P");
        setQ4(false);
        setQ5(true);
        
    }
    const ClickSend = () => {
        setQ6(true);
    }


    const EnI2 = () => {
        return (
            <div>
                <div className="quiz">난 현실적인 사람이다</div>
                <button className="o" onClick={ClickYes2}>Yes</button>
                <button className="x" onClick={ClickNo2}>No</button>
            </div>
        )
    }

    const EnI3 = () => {
        // console.log(m1);
        return (
            <div>
                <div className="quiz">난 감정적인 사람들을 보면 이해가 안간다</div>
                <button className="o" onClick={ClickYes3}>Yes</button>
                <button className="x" onClick={ClickNo3}>No</button>
            </div>
        )
    }

    const EnI4 = () => {
        return (
            <div>
                <div className="quiz">난 계획을 세우고 행동하는 것을 좋아한다.</div>
                <button className="o" onClick={ClickYes4}>Yes</button>
                <button className="x" onClick={ClickNo4}>No</button>
            </div>
        )
    }



    // useEffect(() => {
    const EnI1 = () => {
        return (
            <div>
                <div className="quiz">나는 친구들을 만나면서 스트레스를 푼다.</div>
                <button className="o" onClick={ClickYes1}>Yes</button>
                <button className="x" onClick={ClickNo1}>No</button>
            </div>
        )
    };
    //     EnI1();
    // }, []);

    const Start = () => {
        return (
            <div>
                <button onClick={ClickStart}>시작</button>
            </div>
        )
    }

    const Result = () => {
        setResult(m1 + m2 + m3 + m4);
        return (
            <div className="result">
                {result}
                <button onClick={Mbti}>결과 전송</button>
            </div>
        )
    }


    const Mbti = async () => {

        try {
            const response = await TeamAPI.mbtiServlet(localId, result);

            if (response.data.result === "OK") {
                window.localStorage.setItem("userMbti", result);
            } else {
                console.log("실패?!!")
            }
        } catch (e) {
            alert("오류 발생!! ))");
            console.log("로그인 에러!! 왜 또 안 될까..?");
        }
    }




    return (
        <div>
            {start && <Start />}
            {q1 && <EnI1 />}
            {q2 && <EnI2 />}
            {q3 && <EnI3 />}
            {q4 && <EnI4 />}
            {q5 && <Result />}
            {/* {q6 && <Mbti />} */}
        </div>
    )
}
export default Pg1;