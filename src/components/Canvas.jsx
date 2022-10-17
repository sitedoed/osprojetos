import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Canvas.css';

export default function Canvas() {
  return (
    <div className="canvas">   
        <Container>
            <Row>
                <Col>
                    <h1>O que é Canvas?</h1>
                    <br />
                    <p>
                        Basicamente, Canvas é uma método, desenvolvido pelo suiço Alexander Osterwalder, em sua tese de doutorado e que faz sucesso no mundo inteiro, por apresentar de forma simples os meios para entender as principais características de um negócio e com isso traçar as estratégias mais adequadas para atingir, ou até mesmo superar, as expectativas dos empreendedores.
                    </p>
                    <p>
                    Dessa forma, é possível desenvolver um <strong>modelo de negócios</strong> exclusivo que atenda as necessidades do mercado e agregue valor, tanto aos consumidores, quanto a sua marca ou projeto.  
                    </p>
                    <br />
                    <h2>Para isso você deve preencher uma tabela com as seguintes informações:</h2>
                    <br />
                    <ul>
                        <li><strong>Parceiros-chave:</strong>  quem são ou quais são as parcerias principais para que o seu modelo de negócios se concretize?
                        </li>
                        <li><strong>Atividades-chave:</strong> Quais são as atividades mais importantes para entregar valores reais ao seu mercado ou público consumidor?
                        </li>
                        <li><strong>Recursos-chave:</strong> Quais os recursos necessários para desenvolver as atividades-chave do seu negócio?
                        </li>
                        <li><strong>Proposta de valor:</strong> o que a sua empresa vai oferecer para o mercado que realmente terá valor aos clientes?
                        </li>
                        <li><strong>Relação com o cliente:</strong> Como é ou vai ser o relacionamento da sua empresa com o seu cliente?
                        </li>
                        <li><strong>Canais:</strong> Quais seus canais de venda ou comercialização de produtos e serviços?</li>
                        <li><strong>Segmentos de mercado:</strong> Qual o foco da sua empresa? Quem é o seu público-alvo?</li>
                        <li><strong>Estrutura de custos:</strong> Quais são os custos necessários para que ela funcione?</li>
                        <li><strong>Fontes de receita:</strong> Como sua empresa vai pagar as despesas e obter lucro?</li>
                    </ul>
                    <br />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
