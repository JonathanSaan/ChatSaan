import { Header } from "../../components/Header";
import "./style.scss";

export const Container = () => {
  
  return (
    <>
      <Header />
      <div className="Container">
        <div className="UserChat">
          <p>
            Opa 
          </p>
        </div>
        <div className="OtherChat">
          <p>
            oi
          </p>
        </div>
        <div className="OtherChat">
          <p>
            oi
          </p>
        </div>
        <div className="UserChat">
          <p>
            Opa 
          </p>
        </div>
        <div className="Chat">
          <input placeholder="Sign in to chat" />
          <button>
          botao
          </button>
        </div>
      </div>
    </>
  );
};