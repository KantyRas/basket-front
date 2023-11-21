const Statistiques: React.FC = () => {
    return (
<section>
        <main>
            <div className="text-center mt-4">
                <h1>Statistiques "Nom equipe"</h1>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Classement</th>
                    <th scope="col">Joueur</th>
                    <th scope="col">MJ</th>
                    <th scope="col">PPM</th>
                    <th scope="col">RPM</th>
                    <th scope="col">PDPM</th>
                    <th scope="col">MPM</th>
                    <th scope="col">EFF</th>
                    <th scope="col">FG%</th>
                    <th scope="col">3Pts%</th>
                    <th scope="col">LF%</th>
                    <th scope="col">IPM</th>
                    <th scope="col">CPM</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Stephen Curry</td>
                    <td>12</td>
                    <td>36.5</td>
                    <td>7.5</td>
                    <td>5.7</td>
                    <td>37.3</td>
                    <td>30.2</td>
                    <td>50.2</td>
                    <td>99</td>
                    <td>45.6</td>
                    <td>3.2</td>
                    <td>1.5</td>
                </tr>
                </tbody>
            </table>
        </main>
</section>
    );
};
export default Statistiques;