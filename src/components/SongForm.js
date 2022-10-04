import React, { useState } from "react";
import { Container } from "react-bootstrap";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos incompletos");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <Container>
        <form
          className="row d-flex justify-content-center align-items-center m-0  text-white p-2 row-cols-md-3 row-cols-sm-1"
          onSubmit={handleSubmit}
        >
          <input
            className="m-1 text-center"
            type="text"
            name="artist"
            placeholder="Nombre del artista"
            onChange={handleChange}
            value={form.artist}
          />
          <input
            className="m-1 text-center"
            type="text"
            name="song"
            placeholder="Nombre del canción"
            onChange={handleChange}
            value={form.song}
          />
          <input className="m-1 btn btn-success" type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default SongForm;
