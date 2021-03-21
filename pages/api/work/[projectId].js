import { projects } from '../../../data'

export default function projectHandler({ query: { projectId } }, res) {
    const filtered = projects.filter((project) => project.id === projectId)
  
    // Project with id exists
    if (filtered.length > 0) {
      res.status(200).json(filtered[0])
    } else {
      res.status(404).json({ message: `Project with id: ${projectId} not found.` })
    }
  }