export class Todo {
  constructor(description = "", status = "new") {
    this.description = description;
    this.stastus = status;
    this.id = +localStorage.getItem("lastId") + 1;
    localStorage.setItem("lastId", this.id);
    Todo.todoIds.push(this.id);
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }
}
