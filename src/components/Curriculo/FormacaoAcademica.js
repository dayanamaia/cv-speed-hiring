import React from 'react'
import './style.css'
import formacao from '../../assets/icons/formacao.svg'
import data from '../../assets/icons/date.svg'

const FormacaoAcademica = ({ curso, instituicao, dataFim, dataInicio }) => (

        <section>
                <p className="p-curso">{curso}</p>
                <div  className="instituicao">
                    <img className="icon-formacao" src={formacao} alt="Ícone formação" />
                    <p className="p-instituicao">{instituicao}</p>
                <p className="p-periodo">
                    <img className="icon-calendar" src={data} alt="ícone de calendário" />
                    {dataInicio} - {dataFim}
                </p>
                </div>
                <hr className="linha" />
        </section>
)

export default FormacaoAcademica