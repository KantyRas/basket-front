import React from "react";
import {Link} from "react-router-dom";

const ListeEquipe: React.FC = () => {
    return(
        <div className="container">
            <div className="text-center mt-4">
                <h1>Listes équipes</h1>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><Link to="/stat">Golden State Warriors : GSW</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default ListeEquipe;