import './TechnoCard.scss';

export default function TechnoCard({color = "#2779F5"} :  {color?: string}) {
        return (

                <div className="techno card">
                        <header className="card-header">
                                <p className="card-header-title">Javascript</p>
                        </header>
                        <progress value="90" max="100" style={{ "--progress-color": color } as React.CSSProperties} />
                </div>
        )
}

