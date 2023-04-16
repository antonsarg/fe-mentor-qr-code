import qrCode from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="App flex min-h-screen w-full items-center justify-center bg-light-gray font-outfit">
      <div class="mx-6 max-w-xs rounded-2xl bg-white p-4 pb-8 shadow-2xl">
        <img class="rounded-2xl" src={qrCode} alt="QR Code" />
        <h1 class="mt-5 px-6 text-center text-xl font-bold text-dark-blue">
          Improve your front-end skills by building projects
        </h1>
        <p class="mt-3 px-6 text-center text-[15px] text-grayish-blue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
