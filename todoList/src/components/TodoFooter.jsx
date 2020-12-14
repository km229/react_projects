import React from 'react'
import PropTypes from 'prop-types'

import Link from './TodoFooterLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
    [SHOW_ALL]: 'Toutes',
    [SHOW_ACTIVE]: 'En cours',
    [SHOW_COMPLETED]: 'Terminés',
}

const Footer = (props) => {
    let { activeCount, currentFilter, onChangeFilter, completedCount, onClearCompleted } = props
    return (
        <footer className="footer">
			<span className="todo-count">
				<strong>
					{activeCount || 'Aucune'}
				</strong> {
			    activeCount <= 1 ? "tâche restante" : "tâches restantes"
			}
			</span>
            <ul className="filters">
                {
                    Object.keys(FILTER_TITLES).map((filter) =>
                        (
                            <li key={filter}>
                                <Link
                                    active={currentFilter === filter}
                                    onChangeFilter={onChangeFilter}
                                    filter={filter}
                                >
                                    { FILTER_TITLES[filter] }
                                </Link>
                            </li>
                        ))
                }
            </ul>
            {
                !!completedCount
                && <button
                    type="button"
                    className="clear-completed"
                    onClick={onClearCompleted}
                >Effacer les terminés</button>
            }
        </footer>
    )
}

Footer.propTypes = {
    completedCount: PropTypes.func.isRequired,
    activeCount: PropTypes.func.isRequired,
    currentFilter: PropTypes.func.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
}

export default Footer