"""Builds a static HTML sites from a JSON file and a jinja2 HTML template."""

import sys
import pathlib
import json 
import jinja2
import click

# Main Project Code

@click.command()
@click.option('-v', '--verbose', is_flag=True, help='Prints more output.')
@click.option('-o', '--output', help='Filename of output file.')
@click.argument('INPUT_NAME')
def main(verbose, input_name, output):
    """Static page generator for Kiptoke's personal site."""

    # JSON File Handling
    try:
        json_file = open(f'json/{input_name}.json')
        input = json.load(json_file)
        json_file.close()
        if verbose:
            print(f"-- File {input_name}.json loaded")
    except FileNotFoundError:
        print(f"FileNotFoundError: {input_name} not found")
        sys.exit(1)
    except ValueError:
        print("JSON Error: Failed to decode json file")
        sys.exit(1)

    # Loading in Template
    template_file = f'{input_name}_template.html'
    if output:
        output_file = pathlib.Path(f'{output}.html')
    else:
        output_file =  pathlib.Path(f'{input_name}.html')
    
    if verbose:
        print(f"-- Output set at {output_file}") 

    # Open template file
    try:
        env = jinja2.Environment(
            loader=jinja2.FileSystemLoader('templates'),
            autoescape=jinja2.select_autoescape(['html', 'xml']),
        )

        template = env.get_template(template_file)  

        if verbose:
            print(f"-- File {template_file} loaded")
    except jinja2.TemplateNotFound:
            print(f"Jinja Error: Template {template_file} does not exist")
            sys.exit(1)

    # Open output file
    try:
        html = open(output_file, 'w')
        if verbose:
            print(f"-- Loaded output {output_file}")
    except FileNotFoundError:
        print(f"FileNotFoundError: {output_file} not found")
        sys.exit(1)
    
    # Fill out HTML template
    try:
        html.write(template.render(input))
    except jinja2.TemplateError:
        print("Jinja Error: Error rendering template")
        sys.exit(1)

    if verbose:
        print("Rendered " + input_name + " -> " + str(output_file))

main()