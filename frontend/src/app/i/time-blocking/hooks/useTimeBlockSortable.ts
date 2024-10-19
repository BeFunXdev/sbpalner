import { UniqueIdentifier } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { CSSProperties } from 'react'

export function useTimeBlockSortable(id: UniqueIdentifier) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id })

	const IsDrag = () => {
		if (transform?.y) {
			return transform?.y > 1 ? 100 : 1
		}
		return 1
	}

	const style: CSSProperties = {
		transform: CSS.Transform.toString({
			x: transform?.x || 1,
			y: transform?.y || 1,
			scaleX: 1,
			scaleY: 1
		}),
		transition,
		zIndex: IsDrag()
	}

	return { attributes, listeners, setNodeRef, style }
}
