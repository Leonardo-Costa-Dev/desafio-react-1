import Text from './componentes/text/text';
import Btn from './componentes/button/button';
import './App.css';

const exibirAviso = () => {
    alert("A label desse botão é Baixar CV")
}

function App() {
  return (
      <>
        <Text color="red">
          <h1>Perfil front-end</h1>
          <p>Um desenvolvedor front-end deve ser curioso e estar sempre em busca de aprendizado. Como ele vai trabalhar com várias tecnologias e ferramentas diferentes, ele deve ficar antenado a respeito das novidades da área, buscando sempre propor a melhor e mais viável solução para o problema em questão.</p>
        </Text>

        <Btn label='Baixar CV' onClick={exibirAviso}/>
        
      </>
  );
}

export default App;
