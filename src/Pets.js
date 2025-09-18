const pets = [
  {
    name: "Dolly",
    type: "cat",
    description: "Dolly is funny and loves to be around people",
    skills: ["fetch", "play dead", "roll over"],
    image:
      "https://res.cloudinary.com/atapas/image/upload/v1604829788/cats/remi-remino-E9kVmtiqqGE-unsplash_uivwfy.jpg",
  },
  {
    name: "Molly",
    type: "cat",
    description: "Molly is a sweet and cuddly cat stretch a lot!",
    skills: ["play dead", "meow", "purr"],
    image:
      "https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg",
  },
];

export default function Pets() {
  return (
    <div className="pet-container">
      <h1>Pets list:</h1>
      <div className="pet-card">
        {pets.map((pet) => (
          <div className="pets" key={pet.name}>
            <h1>{pet.name}</h1>
            <img src={pet.image}></img>
            <p>{pet.description}</p>
            {/* <p>Skills: {pet.skills.join(", ")}</p> */}
            <p>Skills</p>
            <ul>
              {pet.skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
