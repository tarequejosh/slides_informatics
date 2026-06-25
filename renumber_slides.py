import re

with open('src/slides/SlideContent.jsx', 'r') as f:
    content = f.read()

# Remove case 13
content = re.sub(r'    case 13:\n      return \([\s\S]*?      \);\n', '', content)

# Remove case 17
content = re.sub(r'    case 17:\n      return \([\s\S]*?      \);\n', '', content)

# Now renumber the remaining cases sequentially
cases = list(re.finditer(r'    case (\d+):', content))
new_content = ""
last_end = 0

for i, match in enumerate(cases):
    new_content += content[last_end:match.start()]
    new_content += f"    case {i}:"
    last_end = match.end()
new_content += content[last_end:]

with open('src/slides/SlideContent.jsx', 'w') as f:
    f.write(new_content)

print(f"Renumbered {len(cases)} cases successfully.")
