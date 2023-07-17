import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App Testing', () => {
    it('Responsive drawer text should be available', () => {
        render(<App />)
        expect(screen.getByText('Live Like')).toBeInTheDocument()
    })
})