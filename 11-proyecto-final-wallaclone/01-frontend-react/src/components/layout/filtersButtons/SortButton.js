import Button from "../../shared/Button"



const SortButton = () => {

    return (
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Ordenar por:</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <Button className="dropdown-item is-active">Novedades</Button>
                    <Button className="dropdown-item ">Menor precio</Button>
                    <Button className="dropdown-item ">Mayor precio</Button>

                </div>
            </div>
        </div>

    )
}

export default SortButton