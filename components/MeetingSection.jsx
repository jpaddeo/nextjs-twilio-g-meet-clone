import MeetingForm from './MeetingForm.jsx';

function MeetingSection() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center space-y-4'>
      <h1 className='text-3xl font-bold text-gray-600'>
        Videoconferencias GRATIS para toda la comunidad hispanohablante y
        seguidora de{' '}
        <a href='https://midu.dev' target='_blank' rel='noopener noreferrer'>
          @midudev
        </a>
      </h1>
      <span className='text-gray-300 text-center'>
        Este es un proyecto desarrolado en el marco de un hackaton propuesto por
        Miguel Ángel Durán.
        <br />
        Podés generar una nueva videoconferencia o ingresar a alguna
        existente...
      </span>
      <MeetingForm />
    </div>
  );
}

export default MeetingSection;
