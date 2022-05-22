import React from "react";
import "../styles/terms-of-use.scss";
export default function TermsOfUse() {
    return (
        <div className="terms-of-use">
            <h1 className="terms-title">Termos e Condições de Uso</h1>
            <h3 className="terms-subtitle">
                Conheça os direitos e responsabilidades que regem o bom uso
                deste portal.
            </h3>
            <p>
                A aceitação da Pliítica de Privacidade e dos termos de uso pelos
                clientes e visitantes será automática no momento de utilização
                deste portal.
            </p>
            <p>
                {" "}
                O Banco Green disponibiliza aos seus clientes e visitantes a
                navegação e o acesso ao conteúdo deste portal, sujeitos às
                seguintes condições de uso:
            </p>

            <strong>Responsabilidades</strong>

            <p>O Banco do Nordeste não se responsabiliza por:</p>

            <ol>
                <li>
                    Informações que estejam incorretas, desatualizadas ou
                    incompletas neste portal
                </li>
                <li>
                    Operações realizadas com base nas informações disponíveis
                    neste portal, originadas por erros ou omissões;
                </li>
                <li>
                    Uso indevido de todo o conteúdo disponível neste portal;
                </li>
                <li>
                    Danos, lesões ou problemas de tráfego na Internet, de
                    qualquer natureza, gerados quando houver conexão
                    estabelecida com este portal, ocasionados por defeito,
                    problemas de desempenho, erro, interrupção, atraso ou falha
                    de transmissão de dados ou de equipamentos;
                </li>
                <li>
                    Conteúdos ou quaisquer danos ocasionados por sites que não
                    pertençam ao Banco do Nordeste e que possuam links que
                    referenciem ou sejam referenciados por este portal.
                </li>

                <p>
                    É de responsabilidade de clientes e visitantes deste portal:
                </p>
            </ol>
        </div>
    );
}
