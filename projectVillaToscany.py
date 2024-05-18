import glfw
from OpenGL.GL import *
import numpy as np

# Initialize GLFW
if not glfw.init():
    raise Exception("GLFW can not be initialized!")

# Create a windowed mode window and its OpenGL context
window = glfw.create_window(1000, 1000, "House Scene", None, None)
if not window:
    glfw.terminate()
    raise Exception("GLFW window can not be created!")

# Make the window's context current
glfw.make_context_current(window)

# Set up the viewport
glViewport(0, 0, 1000, 1000)
glMatrixMode(GL_PROJECTION)
glLoadIdentity()
glOrtho(0, 1000, 0, 1000, -1, 1)
glMatrixMode(GL_MODELVIEW)
glLoadIdentity()

def draw_rectangle(x, y, width, height, color):
    glColor3f(*color)
    glBegin(GL_QUADS)
    glVertex2f(x, y)
    glVertex2f(x + width, y)
    glVertex2f(x + width, y + height)
    glVertex2f(x, y + height)
    glEnd()

def draw_triangle(x1, y1, x2, y2, x3, y3, color):
    glColor3f(*color)
    glBegin(GL_TRIANGLES)
    glVertex2f(x1, y1)
    glVertex2f(x2, y2)
    glVertex2f(x3, y3)
    glEnd()

def draw_circle(cx, cy, radius, color):
    glColor3f(*color)
    glBegin(GL_TRIANGLE_FAN)
    for i in range(360):
        theta = i * np.pi / 180
        x = cx + radius * np.cos(theta)
        y = cy + radius * np.sin(theta)
        glVertex2f(x, y)
    glEnd()

def draw_sun_with_rays(cx, cy, radius, color, ray_color):
    draw_circle(cx, cy, radius, color)
    glColor3f(*ray_color)
    glBegin(GL_LINES)
    for i in range(12):
        theta = i * np.pi / 6
        x1 = cx + radius * np.cos(theta)
        y1 = cy + radius * np.sin(theta)
        x2 = cx + (radius + 20) * np.cos(theta)
        y2 = cy + (radius + 20) * np.sin(theta)
        glVertex2f(x1, y1)
        glVertex2f(x2, y2)
    glEnd()

# Main rendering loop
while not glfw.window_should_close(window):
    glClear(GL_COLOR_BUFFER_BIT)

    # Draw the background
    glClearColor(0.5, 0.8, 1.0, 1.0)  # Light blue sky for morning
    glClear(GL_COLOR_BUFFER_BIT)

    # Draw the ground
    draw_rectangle(0, 0, 1000, 100, (0, 0.5, 0))

    # Draw the house
    draw_rectangle(300, 100, 400, 300, (0.6, 0.1, 0.1))  # House body
    draw_rectangle(340, 240, 100, 100, (1, 0.6, 0.1))  # Left window
    draw_rectangle(560, 240, 100, 100, (1, 0.6, 0.1))  # Right window
    draw_rectangle(460, 100, 80, 140, (0.5, 0.5, 0.5))  # Door

    # Draw the roof
    draw_triangle(280, 400, 500, 560, 720, 400, (0.5, 0.5, 0.5))

    # Draw the chimney
    draw_rectangle(540, 460, 40, 60, (0.1, 0.1, 0.1))

    # Draw the sun with rays
    draw_sun_with_rays(800, 800, 100, (1.0, 1.0, 0.0), (1.0, 1.0, 0.0))

    # Draw the clouds
    draw_circle(200, 900, 60, (1.0, 1.0, 1.0))
    draw_circle(260, 900, 60, (1.0, 1.0, 1.0))
    draw_circle(320, 900, 60, (1.0, 1.0, 1.0))
    draw_circle(600, 840, 50, (1.0, 1.0, 1.0))
    draw_circle(660, 840, 50, (1.0, 1.0, 1.0))

    # Draw the trees
    draw_rectangle(120, 100, 40, 140, (0.4, 0.2, 0.0))  # Tree 1 trunk
    draw_circle(140, 240, 60, (0.0, 0.5, 0.0))  # Tree 1 foliage

    draw_rectangle(240, 100, 40, 100, (0.4, 0.2, 0.0))  # Tree 2 trunk
    draw_circle(260, 200, 50, (0.0, 0.7, 0.0))  # Tree 2 foliage

    draw_rectangle(800, 100, 40, 140, (0.4, 0.2, 0.0))  # Tree 3 trunk
    draw_circle(820, 240, 60, (0.0, 0.4, 0.0))  # Tree 3 foliage

    draw_rectangle(920, 100, 40, 120, (0.4, 0.2, 0.0))  # Tree 4 trunk
    draw_circle(940, 220, 40, (0.0, 0.6, 0.0))  # Tree 4 foliage

    # Swap front and back buffers
    glfw.swap_buffers(window)

    # Poll for and process events
    glfw.poll_events()

# Terminate GLFW
glfw.terminate()
