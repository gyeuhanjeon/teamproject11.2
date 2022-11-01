import { Link } from "react-router-dom";

function Main() {

    return(
        <div>
            <div> 엠비티아이셔</div>
            <Link to="/login"><button>시작하기</button></Link>
        </div>
    );
}
export default Main;