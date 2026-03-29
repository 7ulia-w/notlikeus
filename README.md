# Not Like Us

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/7ulia-w/notlikeus.git
   cd notlikeus
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

## Project Structure
```
notlikeus/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── models.py
│   ├── routes.py
│   └── ...  # Other modules
├── venv/
├── requirements.txt
└── README.md
```
- **app/**: Contains the main application code.
- **venv/**: Virtual environment directory (should not be included in version control).
- **requirements.txt**: Lists the dependencies required to run the application.

## Features
- User authentication
- Data visualization
- RESTful API implementation
- Deployment ready for GitHub Pages

## Deployment Guide for GitHub Pages
1. Ensure your static site is ready for deployment.
2. Push your code to the `gh-pages` branch:
   ```bash
   git checkout -b gh-pages
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```
3. Go to the GitHub repository settings and enable GitHub Pages from the `gh-pages` branch.
