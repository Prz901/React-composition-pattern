import { Notification } from "./components/Notification";
import { Rocket, X, Check } from "lucide-react"
import { NotificationRoot } from "./components/Notification/NotificationRoot";
import { NotificationIcon } from "./components/Notification/NotificationIcon";
import { NotificationContent } from "./components/Notification/NotificationContent";
import { NotificationActions } from "./components/Notification/NotificationActions";
import { NotificationAction } from "./components/Notification/NotificationAction";

function App() {
  return (
    <div className="w-screen h-screen  bg-zinc-800 text-zinc-50 flex justify-center flex-col items-center p-10">
      <div className="w-96 ">
        {/* Chamada de forma de component anti padrão. */}
        <Notification
          text="Voce recebeu um convite para fazer parte da empresa Rockeseat."
          icon={Rocket}
          hasActions
        />
        <Notification
          text="Voce recebeu um convite para fazer parte da empresa Rockeseat."
          icon={Rocket}
          hasActions
        />
      </div>
      <div className="w-96">
        <h2 className="text-lg text-violet-500 py-12">Implementando componente utilizando padrao de composição do React. </h2>

        {/* Pelo Pattern de composição temos muito mais flexibilidade na hora de exibir e criar o componente.*/}

        <NotificationRoot>
          <NotificationIcon icon={Rocket} />
          <NotificationContent text="Voce recebeu um convite para fazer parte da empresa Rockeseat." />
          <NotificationActions >
            <NotificationAction icon={X} />
          </NotificationActions>
        </NotificationRoot>

        <NotificationRoot>
          <NotificationContent text="Voce recebeu um convite para fazer parte da empresa Rockeseat." />
          <NotificationActions >
            <NotificationAction icon={X} />
            <NotificationAction icon={Check} />
          </NotificationActions>
        </NotificationRoot>

        <NotificationRoot>
          <NotificationContent text="Voce recebeu um convite para fazer parte da empresa Rockeseat." />
          <NotificationActions >
            <NotificationAction icon={X} />
          </NotificationActions>
        </NotificationRoot>



      </div>
    </div>
  );
}

export default App;
