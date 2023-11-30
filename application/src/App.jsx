
import Menu from './features/menu/Menu'
import Layers from './features/layers/Layers'
import Inspector from './features/inspector/Inspector'
import Workspace from './features/workspace/Workspace'
import Explorer from './features/explorer/Explorer'

function App() {

  return (
    <div className="d-flex flex-column w-100 min-vh-100" data-bs-theme="dark" >
        <Menu />

        <div className="d-flex flex-row flex-grow-1">

            {/* Left Panel */}
            <div className="d-flex flex-column flex-grow-1 border-end border-secondary" style={{maxWidth: "256px"}}>

                <div className="mb-auto">
                    <Layers />
                </div>

                <Inspector />
            </div>

            {/* Work area */}
            <div className="d-flex flex-column flex-grow-1">
                <Workspace />

                <Explorer />
            </div>
        </div>
    </div>
  )
}

export default App
