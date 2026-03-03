

const ProjectCard = () => {
  return (
    <div className="text-white flex flex-col gap-4 border-2 border-white p-4">
      <div>
        <img src="../../src/public/images/website.jpeg" className="w-70 h-40" />
      </div>
      <div className="flex flex-col items-center leading-snug">
        <h4 className="font-semibold">Task Manager App</h4>
        <p className="text-sm">Full-stack productivity app with JWT auth</p>
        <ul className="flex gap-4">
          <li className="tracking-tight text-sm ">React</li>
          <li className="tracking-tight text-sm">Node</li>
          <li className="tracking-tight text-sm">Mongodb</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard