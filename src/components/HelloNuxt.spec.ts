import { render, RenderResult } from '@testing-library/vue'
import HelloNuxt from './HelloNuxt.vue'

describe('components:HelloNuxt', () => {
  let component: RenderResult

  beforeEach(() => {
    component = render(HelloNuxt)
  })

  it('Should render', () => {
    expect(component).toBeTruthy()
  })

  it('Should contains text', () => {
    expect(component.getByTestId('welcome-nuxt').textContent).toBe('Welcome to Nuxt 3 Starter')
  })
})
