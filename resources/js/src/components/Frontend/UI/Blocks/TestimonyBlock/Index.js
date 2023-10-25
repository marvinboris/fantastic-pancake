export default function TestimonyBlock({ link, name, title, photo }) {
    return (
        <a href={link} className="TestimonyBlock">
            <div>
                <div className="name">{name}</div>
                <div className="title">{title}</div>
            </div>

            <div className="img">
                <div
                    className="bg-img"
                    style={{ backgroundImage: `url("${photo}")` }}
                />
            </div>
        </a>
    );
}
