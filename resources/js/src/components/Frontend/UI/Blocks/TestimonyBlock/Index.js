export default function TestimonyBlock({ title, body, name, company, photo }) {
    return <div className='TestimonyBlock'>
        <div className='img'>
            <div className='bg-img' style={{ backgroundImage: `url("${photo}")` }} />
        </div>

        <div className='title'>{title}</div>

        <div className='body'>{body}</div>

        <div className='name'>{name}</div>

        <div className='company'>{company}</div>
    </div>
}