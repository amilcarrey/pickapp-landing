/* eslint-disable @next/next/no-img-element */
interface EmailTemplateProps {
  email: string
}

export const NewClientTemplate = ({ email }: EmailTemplateProps) => (
  <div>
    <h1>Posible cliente interesado! </h1>
    <img
      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Ffiesta-party-baile-dance-emocionados-gif-13907132&psig=AOvVaw2k3bCEjL9rV6AaPQ2kNBnI&ust=1686718155420000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIiy1PW4v_8CFQAAAAAdAAAAABAE"
      height={500}
      width={600}
      alt="Fiesta"
    />
    <p>
      Hello boss, buenas noticias. Alguien quiere saber mas de nosotros, su
      correo es:
      {email}
    </p>
  </div>
)
