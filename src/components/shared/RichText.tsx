import { Fragment } from 'react';
import { Box, Typography } from '@mui/material';

// Renders **bold** spans inside a line of text.
export function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );
}

// Content strings are indented, hard-wrapped template literals. Blank lines separate
// paragraphs, wrapped lines are joined, and lines starting with "- " become a bullet list.
export default function RichText({ text }: { text: string }) {
  const blocks = text.trim().split(/\n\s*\n/);
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
        const bullets = lines.filter((line) => line.startsWith('- '));
        const prose = lines.filter((line) => !line.startsWith('- ')).join(' ');
        return (
          <Fragment key={i}>
            {prose && (
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                {renderInline(prose)}
              </Typography>
            )}
            {bullets.length > 0 && (
              <Box component="ul" sx={{ mt: 0, mb: 2, pl: 3, lineHeight: 1.8 }}>
                {bullets.map((line, j) => (
                  <li key={j}>{renderInline(line.slice(2))}</li>
                ))}
              </Box>
            )}
          </Fragment>
        );
      })}
    </>
  );
}
