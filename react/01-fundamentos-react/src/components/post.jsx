import styles from './post.module.css'

export function Post() {
  return (
    <div className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/adrianmouzinho.png" alt="Adrian Mouzinho" />
          <div>
            <strong>Adrian Mouzinho</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="29 de Maio às 10:13h" dateTime="2024-05-29 10:13:00">Publicado há 2h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.form}>
        <label>
          Deixe seu feedback
          <textarea 
            name="feedback"
            placeholder="Deixe um comentário"
          ></textarea>
        </label>
        <button type="submit">Publicar</button>
      </form>
    </div>
  )
}