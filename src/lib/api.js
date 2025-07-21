const BASE_URL = "http://localhost:3001/projects";

export async function fetchProjects() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error, can not get");
  return res.json();
}

export async function createProject(projectData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  if (!res.ok) throw new Error("Error, can not post");
  return res.json();
}

export async function deleteProject(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error, can not delete");
  return res.json();
}

export async function updateProject(id, projectData) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  if (!res.ok) throw new Error("Error, can not update");
  return res.json();
}
