import TwitterFollowCard from "./TwitterFollowCard";
import "./App.css";

export default function App() {
  return (
    <section className="tw-content-followCard">
      <TwitterFollowCard
        name="Alexander Caicedo "
        username="alexander"
        following={true}
      />
      <TwitterFollowCard
        name="Alex Caicedo"
        username="alex"
        following={false}
      />
      <TwitterFollowCard name="Pepe Caicedo" username="pepe" following={true} />
    </section>
  );
}
