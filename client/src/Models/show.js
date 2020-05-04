class Show {
  static url = "http://localhost:3001/api/shows";

  static get() {
    return fetch(this.url)
      .then(res => res.json());
  }

  static post(showData) {
    return fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(showData)
    }).then(res => res.json());
  }

  static delete(id) {
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }
}

export default Show;
